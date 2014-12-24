<?php

namespace OnlyBits\LogicGates;

class AndGate extends LogicGate
{
    /**
     * @inherit
     */
    public function out()
    {
        $this->output = true;

        foreach ($this->inputs as $number => $value) {
            if (!$value) {
                $this->output = $value;
                break;
            }
        }

        return $this->output;
    }
}
