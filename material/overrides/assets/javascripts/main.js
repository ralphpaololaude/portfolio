fLoadWorkflow()

async function fLoadWorkflow() {
  const demo = document.getElementById('demo');
  const fileName = demo.dataset.file;

  const response = await fetch(fileName);
  const workflowJson = await response.text();

  demo.setAttribute('workflow', workflowJson);
}