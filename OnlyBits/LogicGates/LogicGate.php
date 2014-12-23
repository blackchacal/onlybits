<?php

namespace OnlyBits\LogicGates;

abstract class LogicGate
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


    public function __construct()
    {
        $total = $this->total_inputs;

        // Check for correct input number
        if (!is_int($total) || !($total % 2 === 0)) {
            $total = 2;
        }

        // Initialize all the inputs to false.
        for ($i=0; $i < $total; $i++) {
            $this->inputs[strval($i+1)] = false;
        }
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
}
