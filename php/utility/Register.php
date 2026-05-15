<?php
declare(strict_types=1);

// HarryPotter SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

HarryPotterUtility::setRegistrar(function (HarryPotterUtility $u): void {
    $u->clean = [HarryPotterClean::class, 'call'];
    $u->done = [HarryPotterDone::class, 'call'];
    $u->make_error = [HarryPotterMakeError::class, 'call'];
    $u->feature_add = [HarryPotterFeatureAdd::class, 'call'];
    $u->feature_hook = [HarryPotterFeatureHook::class, 'call'];
    $u->feature_init = [HarryPotterFeatureInit::class, 'call'];
    $u->fetcher = [HarryPotterFetcher::class, 'call'];
    $u->make_fetch_def = [HarryPotterMakeFetchDef::class, 'call'];
    $u->make_context = [HarryPotterMakeContext::class, 'call'];
    $u->make_options = [HarryPotterMakeOptions::class, 'call'];
    $u->make_request = [HarryPotterMakeRequest::class, 'call'];
    $u->make_response = [HarryPotterMakeResponse::class, 'call'];
    $u->make_result = [HarryPotterMakeResult::class, 'call'];
    $u->make_point = [HarryPotterMakePoint::class, 'call'];
    $u->make_spec = [HarryPotterMakeSpec::class, 'call'];
    $u->make_url = [HarryPotterMakeUrl::class, 'call'];
    $u->param = [HarryPotterParam::class, 'call'];
    $u->prepare_auth = [HarryPotterPrepareAuth::class, 'call'];
    $u->prepare_body = [HarryPotterPrepareBody::class, 'call'];
    $u->prepare_headers = [HarryPotterPrepareHeaders::class, 'call'];
    $u->prepare_method = [HarryPotterPrepareMethod::class, 'call'];
    $u->prepare_params = [HarryPotterPrepareParams::class, 'call'];
    $u->prepare_path = [HarryPotterPreparePath::class, 'call'];
    $u->prepare_query = [HarryPotterPrepareQuery::class, 'call'];
    $u->result_basic = [HarryPotterResultBasic::class, 'call'];
    $u->result_body = [HarryPotterResultBody::class, 'call'];
    $u->result_headers = [HarryPotterResultHeaders::class, 'call'];
    $u->transform_request = [HarryPotterTransformRequest::class, 'call'];
    $u->transform_response = [HarryPotterTransformResponse::class, 'call'];
});
