<?php

namespace OnlyBits\LogicGates;

class NOTGate extends LogicGateAbstract
{
    public function __construct()
    {
        parent::__construct(1);
    }

    /**
     * {@inheritdoc}
     */
    public function out()
    {
        $this->output = !$this->inputs["1"];

        return $this->output;
    }
}
