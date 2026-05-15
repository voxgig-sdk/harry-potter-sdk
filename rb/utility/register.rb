# HarryPotter SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

HarryPotterUtility.registrar = ->(u) {
  u.clean = HarryPotterUtilities::Clean
  u.done = HarryPotterUtilities::Done
  u.make_error = HarryPotterUtilities::MakeError
  u.feature_add = HarryPotterUtilities::FeatureAdd
  u.feature_hook = HarryPotterUtilities::FeatureHook
  u.feature_init = HarryPotterUtilities::FeatureInit
  u.fetcher = HarryPotterUtilities::Fetcher
  u.make_fetch_def = HarryPotterUtilities::MakeFetchDef
  u.make_context = HarryPotterUtilities::MakeContext
  u.make_options = HarryPotterUtilities::MakeOptions
  u.make_request = HarryPotterUtilities::MakeRequest
  u.make_response = HarryPotterUtilities::MakeResponse
  u.make_result = HarryPotterUtilities::MakeResult
  u.make_point = HarryPotterUtilities::MakePoint
  u.make_spec = HarryPotterUtilities::MakeSpec
  u.make_url = HarryPotterUtilities::MakeUrl
  u.param = HarryPotterUtilities::Param
  u.prepare_auth = HarryPotterUtilities::PrepareAuth
  u.prepare_body = HarryPotterUtilities::PrepareBody
  u.prepare_headers = HarryPotterUtilities::PrepareHeaders
  u.prepare_method = HarryPotterUtilities::PrepareMethod
  u.prepare_params = HarryPotterUtilities::PrepareParams
  u.prepare_path = HarryPotterUtilities::PreparePath
  u.prepare_query = HarryPotterUtilities::PrepareQuery
  u.result_basic = HarryPotterUtilities::ResultBasic
  u.result_body = HarryPotterUtilities::ResultBody
  u.result_headers = HarryPotterUtilities::ResultHeaders
  u.transform_request = HarryPotterUtilities::TransformRequest
  u.transform_response = HarryPotterUtilities::TransformResponse
}
