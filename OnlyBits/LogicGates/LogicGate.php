<?php

namespace OnlyBits\LogicGates;

use OnlyBits\Connectors\IConnect;
use OnlyBits\Connectors\Wire;

abstract class LogicGate implements IConnect
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
     * @param int $total_inputs Gate total number of inputs.
     */
    public function __construct($total_inputs)
    {
        $total = $total_inputs;

        // Check for correct input number
        if ((!is_int($total) || !($total % 2 === 0) || $total <= 0) && $total !== 1) {
            $total = 2;
        }

        // Initialize all the inputs to false.
        for ($i=0; $i < $total; $i++) {
            $this->inputs[strval($i+1)] = false;
        }

        $this->total_inputs = $total;
    }

    /**
     * Retrieves the total number of inputs of the gate.
     *
     * @return int Gate total input number.
     */
    public function totalInputs()
    {
        return $this->total_inputs;
    }

    /**
     * Sets the gate inputs. The inputs should have the same format as defined
     * earlier.
     *
     * @param  array  $inputs Gate input values
     * @return void
     */
    public function in(array $inputs)
    {
        foreach ($inputs as $key => $value) {
            if (array_key_exists($key, $this->inputs) && is_bool($value)) {
                $this->inputs[$key] = $value;
            }
        }
    }

    /**
     * Calculates and retrieves the gate output.
     *
     * @return bool Gate output.
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
