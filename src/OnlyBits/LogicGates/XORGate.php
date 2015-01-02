<?php

namespace OnlyBits\LogicGates;

class XORGate extends LogicGateAbstract
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

        // Change the value of the wire connected to ouput if there's one
        $this->updateOutputConnection();

        return $this->output;
    }
}
