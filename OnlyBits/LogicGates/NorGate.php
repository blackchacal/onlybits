<?php

namespace OnlyBits\LogicGates;

class NorGate extends LogicGate
{
    /**
     * {@inheritdoc}
     */
    public function out()
    {
        // Natural state
        $this->output = false;

        foreach ($this->inputs as $number => $value) {
            if (!$value) {
                $this->output = !$value;
                break;
            }
        }

        return $this->output;
    }
}
