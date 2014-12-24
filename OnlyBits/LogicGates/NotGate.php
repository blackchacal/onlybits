<?php

namespace OnlyBits\LogicGates;

class NotGate extends LogicGate
{
    public function __construct()
    {
        parent::__construct(1);
    }

    /**
     * @inherit
     */
    public function out()
    {
        $this->output = !$this->inputs["1"];

        return $this->output;
    }
}
