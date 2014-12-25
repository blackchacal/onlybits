<?php

namespace OnlyBits\LogicGates;

class AndGate extends LogicGate
{
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

        return $this->output;
    }
}
