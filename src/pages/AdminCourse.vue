<template>
  <main style="min-height: 100vh">
    <div class="container admin-course__content">
      <h1 style="text-decoration: none">
        <router-link style="text-decoration: none" to="/admin"
          >Admin</router-link
        >
        > <strong><router-link to="/admin">Courses</router-link></strong> >
        <strong
          ><router-link :to="`/admin/${index}`">
            {{ quest }}
          </router-link></strong
        >
      </h1>

      <div
        style="display: flex; justify-content: space-between; margin: 20px 0px"
      >
        <select v-model="selectVerificationStatus">
          <option value="All">View All</option>
          <option value="Verified" selected>Verified</option>
          <option value="Unverified">Unverified</option>
        </select>

        <div class="search-box">
          <input
            type="text"
            placeholder="ex. Juan Dela Cruz"
            v-model="searchFinisher"
            required
          />
          <img src="@/assets/images/vectors/search.png" />
        </div>
      </div>

      <div v-if="finishers.length > 0" class="finisher-table">
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
              v-for="finisher in filteredFinishers"
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

      <div v-else style="width: 100%; text-align: center">
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
        </table>
        <h3 style="margin-top: 30px">No Finishers</h3>
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
      selectVerificationStatus: "All",
      searchFinisher: "",
    };
  },

  computed: {
    quest() {
      if (this.finishers.length > 0) {
        return this.finishers[0].quest;
      }
      return null;
    },

    filteredFinishers() {
      return this.finishers.filter((finisher) => {
        if (this.searchFinisher) {
          return (
            finisher.lastName
              .toLowerCase()
              .includes(this.searchFinisher.toLowerCase()) ||
            finisher.firstName
              .toLowerCase()
              .includes(this.searchFinisher.toLowerCase())
          );
        } else if (this.selectVerificationStatus == "All") {
          return finisher;
        } else if (this.selectVerificationStatus == "Verified") {
          if (finisher.isVerified) {
            return finisher;
          }
        } else if (this.selectVerificationStatus == "Unverified") {
          if (!finisher.isVerified) {
            return finisher;
          }
        }
      });
    },
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

.search-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid #c4c4c4;
  width: 200px;
}

.search-box input {
  border: none;
  background: none;
}

.search-box input:focus {
  outline: none;
}
</style>