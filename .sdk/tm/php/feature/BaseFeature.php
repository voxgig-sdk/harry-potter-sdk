<?php
declare(strict_types=1);

// HarryPotter SDK base feature

class HarryPotterBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HarryPotterContext $ctx, array $options): void {}
    public function PostConstruct(HarryPotterContext $ctx): void {}
    public function PostConstructEntity(HarryPotterContext $ctx): void {}
    public function SetData(HarryPotterContext $ctx): void {}
    public function GetData(HarryPotterContext $ctx): void {}
    public function GetMatch(HarryPotterContext $ctx): void {}
    public function SetMatch(HarryPotterContext $ctx): void {}
    public function PrePoint(HarryPotterContext $ctx): void {}
    public function PreSpec(HarryPotterContext $ctx): void {}
    public function PreRequest(HarryPotterContext $ctx): void {}
    public function PreResponse(HarryPotterContext $ctx): void {}
    public function PreResult(HarryPotterContext $ctx): void {}
    public function PreDone(HarryPotterContext $ctx): void {}
    public function PreUnexpected(HarryPotterContext $ctx): void {}
}
