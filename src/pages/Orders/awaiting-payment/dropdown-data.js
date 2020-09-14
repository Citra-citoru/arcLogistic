const taq = ['Manage Taqs'];
const print = ['print'];
const assignTo = ['assign to'];
const hold = ['hold'];
const bulkUpdate = ['bulkUpdate'];
const otherActions = 
[
    'Cancel',
    'Mark as Shipped',
    'Mark as Shipped Bulked',
    'Add to Batch',
    'Validate Address',
    'Manage Presets'
];
export default {
    getData() {
      return { taq,print,assignTo,hold,bulkUpdate,otherActions };
    }
  };
  