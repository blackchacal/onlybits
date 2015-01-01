<?php

namespace OnlyBits\LogicGates;

interface LogicGateInterface
{
    /**
     * Sets the gate inputs. The inputs should have the following format:
     * [
     *     "input_number" => input_value (bool),
     *     "1" => false,
     *     "2" => true,
     *     ...
     * ]
     *
     * @param  array  $inputs Gate input values
     * @return array          Gate inputs
     */
    public function in(array $inputs = []);

    /**
     * Calculates and retrieves the gate output.
     *
     * @return bool Gate output.
     */
    public function out();
}
