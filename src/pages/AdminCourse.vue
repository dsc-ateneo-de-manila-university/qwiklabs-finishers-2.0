<template>
  <main>
      <div class="admin-course__content container">
      <h1>Admin > <strong>Courses</strong> > <strong>Stackdriver Logging</strong></h1>
      <div class="finisher-table">
        <table>
            <thead>
                <tr>
                    <th>First Name 
                        <!-- <img src="@/assets/images/vectors/down-arrow.png" alt=""> -->
                    </th>
                    <th>Last Name 
                        <!-- <img src="@/assets/images/vectors/down-arrow.png"> -->
                    </th>
                    <th>Quest Title 
                        <!-- <img src="@/assets/images/vectors/down-arrow.png"> -->
                    </th>
                    <th>Date of Completion 
                        <!-- <img src="@/assets/images/vectors/down-arrow.png"> -->
                    </th>
                    <th>Date of Registration 
                        <!-- <img src="@/assets/images/vectors/down-arrow.png"> -->
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="body-row" v-for="finisher in finishers" :key="finisher.id">
                    <td>{{ finisher.firstName}}</td>
                    <td>{{ finisher.lastName }}</td>
                    <td>{{ finisher.quest }}</td>
                    <td>{{ finisher.completed }}</td>
                    <td>{{ finisher.registered }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  </main>
</template>

<script>
export default {
    data() {
        return {
            finishers: [
                {id: 1, firstName: "Harvey Jay", lastName: "Sison", quest: "Stackdriver Logging", completed: "2019-12-23", registered: "2019-12-23, 07:35:00"},
                {id: 2, firstName: "Harvey Jay", lastName: "Sison", quest: "Stackdriver Logging", completed: "2019-12-23", registered: "2019-12-23, 07:35:00"},
                {id: 3, firstName: "Harvey Jay", lastName: "Sison", quest: "Stackdriver Logging", completed: "2019-12-23", registered: "2019-12-23, 07:35:00"},
                {id: 4, firstName: "Harvey Jay", lastName: "Sison", quest: "Stackdriver Logging", completed: "2019-12-23", registered: "2019-12-23, 07:35:00"},
                {id: 5, firstName: "Harvey Jay", lastName: "Sison", quest: "Stackdriver Logging", completed: "2019-12-23", registered: "2019-12-23, 07:35:00"},
                {id: 6, firstName: "Harvey Jay", lastName: "Sison", quest: "Stackdriver Logging", completed: "2019-12-23", registered: "2019-12-23, 07:35:00"},
                {id: 7, firstName: "Harvey Jay", lastName: "Sison", quest: "Stackdriver Logging", completed: "2019-12-23", registered: "2019-12-23, 07:35:00"},
            ]
        }
    }
}
</script>

<style>
    main {
        margin-top: 76px;
    }

    .finisher-table {
        overflow-x: auto;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    }

    th, td {
        text-align: left;
        padding: 16px 25px;
    }

    thead {
        border-bottom: 1px solid #f1f1f1;
    }

    thead tr {
        background: #ffffff;
    }

    tbody .body-row:nth-child(odd) {
        background: #ffffff;
    }

    .admin-course__content {
        padding: 30px 0 50px;
    }

</style>