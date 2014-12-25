<?php

namespace OnlyBits\LogicGates;

class NandGate extends LogicGate
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

        return $this->output;
    }
}
