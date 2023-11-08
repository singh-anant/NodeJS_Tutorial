const pendingTimers = [];
const osTask = [];
const longRunningTask = [];
function isSomethingPending() {
  return (
    pendingTimers.length > 0 || osTask.length > 0 || longRunningTask.length > 0
  );
}
while (isSomethingPending()) {
  console.log("Event Loop keep running");
}
