<?php

namespace OnlyBits\LogicGates;

class BufferGate extends LogicGateAbstract
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
        $this->output = $this->inputs["1"];

        // Change the value of the wire connected to ouput if there's one
        $this->updateOutputConnection();

        return $this->output;
    }
}
