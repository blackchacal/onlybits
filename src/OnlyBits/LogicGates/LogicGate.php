<?php

namespace OnlyBits\LogicGates;

use OnlyBits\Connectors\ConnectInterface;
use OnlyBits\Connectors\Wire;

abstract class LogicGate implements ConnectInterface, LogicGateInterface
{
    /**
     * Total number of inputs for the gate.
     *
     * @var int
     */
    protected $total_inputs;

    /**
     * The list of binary inputs to the gate. The format should be:
     * [
     *     "input_number" => input_value (bool),
     *     "1" => false,
     *     "2" => true,
     *     ...
     * ]
     *
     * @var array
     */
    protected $inputs = [];

    /**
     * The value outputed by the gate.
     *
     * @var bool
     */
    protected $output;

    /**
     * Constructor.
     *
     * @param int $number_inputs Gate total number of inputs.
     */
    public function __construct($number_inputs)
    {
        $total = intval($number_inputs);

        // Check for correct input number
        if (!is_numeric($total) || $total <= 0) {
            $total = 2;
        }

        // Initialize all the inputs to false.
        for ($i = 0; $i < $total; $i++) {
            $this->inputs[strval($i+1)] = false;
        }

        $this->total_inputs = $total;
    }

    /**
     * Retrieves the total number of inputs of the gate.
     *
     * @return int Gate total input number.
     */
    public function getTotalInputs()
    {
        return $this->total_inputs;
    }

    /**
     * {@inheritdoc}
     */
    public function in(array $inputs = [])
    {
        foreach ($inputs as $key => $value) {
            if (array_key_exists($key, $this->inputs) && is_bool($value)) {
                $this->inputs[$key] = $value;
            }
        }

        return $this->inputs;
    }

    /**
     * {@inheritdoc}
     */
    abstract public function out();

    /**
     * Connect wires with logic gates.
     *
     * {@inheritdoc}
     */
    public function connect(Wire $wire, $pin = null)
    {
        if (is_null($pin)) {
            // Connect output to wire
            $wire->setValue($this->output);
        } else {
            // Connect input to wire
            $this->inputs[strval($pin)] = $wire->getValue();
        }
    }
}
