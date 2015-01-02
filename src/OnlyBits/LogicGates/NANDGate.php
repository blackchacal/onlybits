<?php

namespace OnlyBits\LogicGates;

use OnlyBits\Connectors\WireAbstract;

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

        if (count($this->connected_to) > 0) {
            foreach ($this->connected_to as $connected) {
                if ($connected['pin'] == 'out' && $connected['entity'] instanceof WireAbstract) {
                    $connected['entity']->setValue($this->output);
                }
            }
        }

        return $this->output;
    }
}
