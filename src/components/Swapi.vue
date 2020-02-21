<template>
    <div id="swapi-list">
        <h1>People Lists</h1>
        <ul>
            <li v-for="person in people" :key="person.id">
                <button @click="editperson(person)" class="btn btn-warning" type="button">Edit</button>

                <router-link tag="a" :to="`/people/${person.id}`">
                    <span>{{ person.name }}</span>
                </router-link>
                <p>{{ person.id }}</p>
            </li>
        </ul>

        <h2>Create new person</h2>
        <form>
            <label class="" for="name">Name</label>
            <input v-model="person.name" class="" id="name" type="text">
            <button v-if="showCreate" @click="storeperson" class="btn btn-success">Create</button>
            <button v-else @click="updateperson" class="btn btn-warning">Update</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                persons: [],
                people: [],
                person: {name: '', id: null},
                showCreate: true,
                resource: null
            }
        },
        methods: {
            getpeople() {
                this.resource.get({})
                    .then(res => res.json())
                    .then(people => this.people = people.results)
                    // .then((response) => {this.people = people.results})
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e)
                        /* eslint-enable no-console */
                    })
            },
            storeperson() {
                let person = this.person
                this.resource.save({}, person)
                    .then(res => res.json())
                    .then(person => {
                        this.people.results.push(person)
                        this.person = {name: '', id: null}
                    })
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e)
                        /* eslint-enable no-console */
                    })
            },
            editperson(person) {
                this.person.name = person.name
                this.person.id = person.id
                this.showCreate = false
            },
            updateperson() {
                let person = this.person
                this.resource.update({id: person.id} , person)
                    .then(res => res.json())
                    .then(person => {
                        this.people[person.id - 1] = person
                        this.person = {name: '', id: null}
                        this.showCreate = true
                    })
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e)
                        /* eslint-enable no-console */
                    })
            }
        },
        created() {
            this.resource = this.$resource('people{/id}')
            this.getpeople()
        }
    }
</script>

<style scoped>
    h2, .btn {
        margin: 5px 15px;
    }
</style>