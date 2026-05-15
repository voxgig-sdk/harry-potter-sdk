<?php
declare(strict_types=1);

// HarryPotter SDK utility: result_headers

class HarryPotterResultHeaders
{
    public static function call(HarryPotterContext $ctx): ?HarryPotterResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
