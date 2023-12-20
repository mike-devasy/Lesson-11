<template>
    <h2>Додати призначення</h2>
    <div class="wrapper">
        <div class="container">
            <label>
                Шофер
                <select v-model="assignment.driverId">
                    <option v-for="driver in getDriversList" :key="driver.id" :value="driver.id">
                        {{ driver.name }} -- {{ driver.exp }}
                    </option>
                </select>
            </label>
            <label>
                Автобус
                <select v-model="assignment.busId">
                    <option v-for="bus in getBusesList" :key="bus.id" :value="bus.id">
                        {{ bus.number }} -- {{ bus.seats }}
                    </option>
                </select>
            </label>
        </div>
        <button @click="onAdd">Нове призначення</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AssignmentCreator',
    data() {
        return {
            assignment: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriversList']),
        ...mapGetters('buses', ['getBusesList']),
    },
    methods: {
        ...mapActions('assignments', ['addAssignment']),
        onAdd() {
            this.addAssignment(this.assignment)
            this.assignment = {}
        },
    },
}
</script>

<style lang="scss" scoped>
h2 {
    text-align: left;
    padding-left: 100px;
}
.wrapper {
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding-left: 50px;
}
.container {
    padding-top: 30px;
    // width: 600px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
}
select {
    width: 200px;
}
label {
    display: inline-block;
}
button {
    display: inline-block;
    align-self: start;
    padding: 7px 15px;
    margin-left: 120px;
    border-radius: 5px;
    border: 1px solid blue;
    transition: all 0.5s ease 0s;
    &:hover {
        background-color: aqua;
        cursor: pointer;
    }
}
</style>
