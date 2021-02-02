<template>
  <main style="min-height: 100vh">
    <div class="container admin-course__content">
      <h1>
        Admin > <strong>Courses</strong> >
        <strong>{{ finishers[0].quest }}</strong>
      </h1>
      <div class="finisher-table">
        <table>
          <thead>
            <tr>
              <th>
                First Name
                <!-- <img src="@/assets/images/vectors/down-arrow.png" alt=""> -->
              </th>
              <th>
                Last Name
                <!-- <img src="@/assets/images/vectors/down-arrow.png"> -->
              </th>
              <th>
                Quest Title
                <!-- <img src="@/assets/images/vectors/down-arrow.png"> -->
              </th>
              <th>
                Date of Completion
                <!-- <img src="@/assets/images/vectors/down-arrow.png"> -->
              </th>
              <!-- <th>Date of Registration  -->
              <!-- <img src="@/assets/images/vectors/down-arrow.png"> -->
              <!-- </th> -->
              <th>
                Status
                <!-- <img src="@/assets/images/vectors/down-arrow.png"> -->
              </th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="body-row"
              v-for="finisher in finishers"
              :key="finisher.id"
            >
              <td>{{ finisher.firstName }}</td>
              <td>{{ finisher.lastName }}</td>
              <td>{{ finisher.quest }}</td>
              <td>{{ finisher.completionDate }}</td>
              <td>
                <p v-if="finisher.isVerified" style="color: green">Verified</p>
                <p v-else style="color: red">Unverified</p>
              </td>
              <td>
                <router-link
                  :to="{
                    name: 'AdminEditFinisher',
                    params: { id: finisher.id },
                  }"
                  >Edit</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
// START: IMPORTS
import moment from "moment";
import db from "../../public/scripts/firebaseInit.js";
// END: IMPORTS

export default {
  data() {
    return {
      finishers: [],
    };
  },
  created() {
    db.collection("finishers")
      .orderBy("completionDate")
      .where("index", "==", this.$route.params.index)
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            quest: doc.data().quest,
            completionDate: moment(doc.data().completionDate).format(
              "MMM D, YYYY"
            ),
            isVerified: doc.data().isVerified,
          };

          this.finishers.push(data);
        })
      );
  },
};
</script>

<style>
main {
  margin-top: 76px;
  min-height: 100vh;
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

th,
td {
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