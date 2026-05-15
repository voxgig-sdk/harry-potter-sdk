# HarryPotter SDK context

require_relative '../utility/struct/voxgig_struct'
require_relative 'control'
require_relative 'operation'
require_relative 'spec'
require_relative 'result'
require_relative 'response'
require_relative 'error'
require_relative 'helpers'

class HarryPotterContext
  attr_accessor :id, :out, :client, :utility, :ctrl, :meta, :config,
                :entopts, :options, :entity, :shared, :opmap,
                :data, :reqdata, :match, :reqmatch, :point,
                :spec, :result, :response, :op

  def initialize(ctxmap = {}, basectx = nil)
    ctxmap ||= {}
    @id = "C#{rand(10000000..99999999)}"
    @out = {}

    @client = HarryPotterHelpers.get_ctx_prop(ctxmap, "client") || basectx&.client
    @utility = HarryPotterHelpers.get_ctx_prop(ctxmap, "utility") || basectx&.utility

    @ctrl = HarryPotterControl.new
    ctrl_raw = HarryPotterHelpers.get_ctx_prop(ctxmap, "ctrl")
    if ctrl_raw.is_a?(Hash)
      @ctrl.throw_err = ctrl_raw["throw"] if ctrl_raw.key?("throw")
      @ctrl.explain = ctrl_raw["explain"] if ctrl_raw["explain"].is_a?(Hash)
    elsif basectx&.ctrl
      @ctrl = basectx.ctrl
    end

    m = HarryPotterHelpers.get_ctx_prop(ctxmap, "meta")
    @meta = m.is_a?(Hash) ? m : (basectx&.meta || {})

    cfg = HarryPotterHelpers.get_ctx_prop(ctxmap, "config")
    @config = cfg.is_a?(Hash) ? cfg : basectx&.config

    eo = HarryPotterHelpers.get_ctx_prop(ctxmap, "entopts")
    @entopts = eo.is_a?(Hash) ? eo : basectx&.entopts

    o = HarryPotterHelpers.get_ctx_prop(ctxmap, "options")
    @options = o.is_a?(Hash) ? o : basectx&.options

    e = HarryPotterHelpers.get_ctx_prop(ctxmap, "entity")
    @entity = e || basectx&.entity

    s = HarryPotterHelpers.get_ctx_prop(ctxmap, "shared")
    @shared = s.is_a?(Hash) ? s : basectx&.shared

    om = HarryPotterHelpers.get_ctx_prop(ctxmap, "opmap")
    @opmap = om.is_a?(Hash) ? om : (basectx&.opmap || {})

    @data = HarryPotterHelpers.to_map(HarryPotterHelpers.get_ctx_prop(ctxmap, "data")) || {}
    @reqdata = HarryPotterHelpers.to_map(HarryPotterHelpers.get_ctx_prop(ctxmap, "reqdata")) || {}
    @match = HarryPotterHelpers.to_map(HarryPotterHelpers.get_ctx_prop(ctxmap, "match")) || {}
    @reqmatch = HarryPotterHelpers.to_map(HarryPotterHelpers.get_ctx_prop(ctxmap, "reqmatch")) || {}

    pt = HarryPotterHelpers.get_ctx_prop(ctxmap, "point")
    @point = pt.is_a?(Hash) ? pt : basectx&.point

    sp = HarryPotterHelpers.get_ctx_prop(ctxmap, "spec")
    @spec = sp.is_a?(HarryPotterSpec) ? sp : basectx&.spec

    r = HarryPotterHelpers.get_ctx_prop(ctxmap, "result")
    @result = r.is_a?(HarryPotterResult) ? r : basectx&.result

    rp = HarryPotterHelpers.get_ctx_prop(ctxmap, "response")
    @response = rp.is_a?(HarryPotterResponse) ? rp : basectx&.response

    opname = HarryPotterHelpers.get_ctx_prop(ctxmap, "opname") || ""
    @op = resolve_op(opname)
  end

  def resolve_op(opname)
    return @opmap[opname] if @opmap[opname]
    return HarryPotterOperation.new({}) if opname.empty?

    entname = @entity&.respond_to?(:get_name) ? @entity.get_name : "_"
    opcfg = VoxgigStruct.getpath(@config, "entity.#{entname}.op.#{opname}")

    input = (opname == "update" || opname == "create") ? "data" : "match"

    points = []
    if opcfg.is_a?(Hash)
      t = VoxgigStruct.getprop(opcfg, "points")
      points = t if t.is_a?(Array)
    end

    op = HarryPotterOperation.new({
      "entity" => entname,
      "name" => opname,
      "input" => input,
      "points" => points,
    })
    @opmap[opname] = op
    op
  end

  def make_error(code, msg)
    HarryPotterError.new(code, msg, self)
  end
end
