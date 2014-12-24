<?php

namespace OnlyBits\LogicGates;

class NandGate extends LogicGate
{
    /**
     * {@inheritdoc}
     */
    public function out()
    {
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
