<?php

namespace OnlyBits\LogicGates;

class ORGate extends LogicGateAbstract
{
    /**
     * {@inheritdoc}
     */
    public function __construct($number_inputs = 2)
    {
        // OR gates can have 2 or 3 inputs
        $total = intval($number_inputs);
        $total = ($total != 3) ? 2 : 3;

        parent::__construct($total);
    }

    /**
     * {@inheritdoc}
     */
    public function out()
    {
        $this->output = false;

        foreach ($this->inputs as $number => $value) {
            // If there's any true input, the output is true
            if ($value) {
                $this->output = $value;
                break;
            }
        }

        return $this->output;
    }
}
