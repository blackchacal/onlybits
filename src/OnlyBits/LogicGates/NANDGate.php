<?php

namespace OnlyBits\LogicGates;

class NANDGate extends LogicGateAbstract
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
        $this->output = false;

        foreach ($this->inputs as $number => $value) {
            // If there's a false input, the output is true
            if (!$value) {
                $this->output = !$value;
                break;
            }
        }

        // Change the value of the wire connected to ouput if there's one
        $this->updateOutputConnection();

        return $this->output;
    }
}
