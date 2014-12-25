<?php

namespace OnlyBits\LogicGates;

class OrGate extends LogicGate
{
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
