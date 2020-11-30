<template>
    <main>
      <QuestsViewMoreTemplate 
      imgSrc="https://firebasestorage.googleapis.com/v0/b/qwiklabs-finishers-ph-e7667.appspot.com/o/34.png?alt=media&amp;token=e505b745-798e-4e5f-ab5e-5f57548b1e00"

      level="Fundamental"
      :steps="5"
      :hours="5"
      :credits="23"

      paragraph="Stackdriver Logging is a fully managed service that performs at scale. It can ingest application and system log data from thousands of VMs and, even better, analyze all that log data in real time. In this fundamental-level Quest, you learn how to store, search, analyze, monitor, and alert on log data and events from Google Cloud Platform. The labs in the Quest give you hands-on practice using Stackdriver Logging to maximize your learning experience and provide insight on how you can utilize Stackdriver Logging to your own GCP Environments."

      :objectives= "[
        'Fundamentals of Stackdriver Logging', 
        'Using BigQuery and Stackdriver to Analyze BigQuery Usage', 
        'Logging with Stackdriver on Kubernetes Engine',
        'Monitoring and Logging for Cloud Functions',
        'Creating and Alerting on Logs-based Metrics']"
        
      :finishers="finishers"/>
    </main>
</template>

<script>
import QuestsViewMoreTemplate from '@/components/QuestsViewMoreTemplate'
export default {
  data() {
    return {
      finishers: [
          {id: 1, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
          {id: 2, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
          {id: 3, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
          {id: 4, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
          {id: 5, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
          {id: 6, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
          {id: 7, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
          {id: 8, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
          {id: 9, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
          {id: 10, imageName: "Renzo.png", name:"Renzo Tan", quest:"GCP Essentials", date:"Nov 18, 2020"},
        ]
    }
  },
  components: {
    QuestsViewMoreTemplate,
  }
}
</script>

<style>

</style>