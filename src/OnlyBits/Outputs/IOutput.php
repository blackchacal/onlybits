<?php

namespace OnlyBits\Outputs;

interface IOutput
{
    /**
     * Manifests the output signal according to the input values, and output
     * type.
     *
     * @return mixed
     */
    public function show();
}
