<?php

namespace OnlyBits\LogicGates;

class XORGate extends LogicGate
{
    public function __construct()
    {
        parent::__construct(2);
    }

    /**
     * {@inheritdoc}
     */
    public function out()
    {
        $input1 = $this->inputs["1"];
        $input2 = $this->inputs["2"];

        $this->output = ($input1 xor $input2);

        return $this->output;
    }
}
