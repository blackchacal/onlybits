<?php

namespace OnlyBits\LogicGates;

class ANDGate extends LogicGateAbstract
{
    /**
     * {@inheritdoc}
     */
    public function __construct($number_inputs = 2)
    {
        // AND gates can have 2 or 3 inputs
        $total = intval($number_inputs);
        $total = ($total != 3) ? 2 : 3;

        parent::__construct($total);
    }

    /**
     * {@inheritdoc}
     */
    public function out()
    {
        $this->output = true;

        foreach ($this->inputs as $number => $value) {
            // If there's a false input, the output is false
            if (!$value) {
                $this->output = $value;
                break;
            }
        }

        // Change the value of the wire connected to ouput if there's one
        $this->updateOutputConnection();

        return $this->output;
    }
}
