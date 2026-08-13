# HarryPotter SDK utility: make_context

from harrypotter_sdk.core.context import HarryPotterContext


def make_context_util(ctxmap, basectx):
    return HarryPotterContext(ctxmap, basectx)
