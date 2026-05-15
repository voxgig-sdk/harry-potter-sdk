<?php
declare(strict_types=1);

// HarryPotter SDK exists test

require_once __DIR__ . '/../harrypotter_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HarryPotterSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
