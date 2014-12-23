<?php

namespace OnlyBits\LogicGates;

class OrGate extends LogicGate
{
    public function __construct()
    {
        $this->total_inputs = 2;

        parent::__construct();
    }

    public function out()
    {
        $input1 = $this->inputs["1"];
        $input2 = $this->inputs["2"];

        $this->output = $input1 || $input2;

        return $this->output;
    }
}
