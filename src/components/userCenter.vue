<template>
    <div class="right">{{ initialState.userName }}</div>
</template>
<script setup>
import { useModel } from '@fesjs/fes';

const initialState = useModel('@@initialState');
</script>
<style scope>
.right {
    text-align: right;
    padding: 0 20px;
}
</style>
