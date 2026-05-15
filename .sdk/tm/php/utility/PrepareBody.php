<?php
declare(strict_types=1);

// HarryPotter SDK utility: prepare_body

class HarryPotterPrepareBody
{
    public static function call(HarryPotterContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
