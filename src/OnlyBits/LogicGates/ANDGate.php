<?php

namespace OnlyBits\LogicGates;

use OnlyBits\Connectors\WireAbstract;

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
