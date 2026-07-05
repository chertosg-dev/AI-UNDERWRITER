const sourceLabel = 'Πηγή: PDF Οδηγίες Ανάληψης Πυρός';

const packageMap = {
  Basic: 'Full Home A',
  Extra: 'Full Home B',
  Advanced: 'Full Home C',
  Max: 'Full Home D'
};
const packageOrder = ['Basic', 'Extra', 'Advanced', 'Max'];
const rank = {Basic:1, Extra:2, Advanced:3, Max:4, 'Προαιρετική':0};

const homeCoverages = [
  {name:'Πυρκαγιά / Κεραυνός / Έκρηξη', package:'Basic', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 4'},
  {name:'Πτώση / πρόσκρουση αεροσκαφών', package:'Basic', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 4'},
  {name:'Τρομοκρατικές ενέργειες', package:'Basic', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 4'},
  {name:'Πυρκαγιά από δάσος', package:'Basic', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 4'},
  {name:'Αστική Ευθύνη από μετάδοση πυρκαγιάς', package:'Basic', limit:'20% του συνολικού ασφαλιζόμενου κεφαλαίου, μέγιστο €18.000 ανά γεγονός, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 4'},
  {name:'Έξοδα κατεδάφισης / εκκαθάρισης / απομάκρυνσης ερειπίων', package:'Basic', limit:'5% του συνολικού κεφαλαίου πυρκαγιάς, μέγιστο €3.000 ανά γεγονός, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 4'},
  {name:'Καπνός', package:'Basic', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 4'},
  {name:'Όρος Πρόνοιας', package:'Basic', limit:'20% — αφορά μόνο οικοδομές', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 4'},
  {name:'Επείγουσα Τεχνική Βοήθεια', package:'Basic', limit:'Τα όρια αποζημίωσης βρίσκονται στο σχετικό προσάρτημα', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 4'},
  {name:'Διαρροή / διάρρηξη σωληνώσεων', package:'Extra', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'5% επί του ποσού της ζημιάς, ελάχιστο €350', source:'σελ. 4'},
  {name:'Ζημιές οικοδομής από διάρρηξη / απόπειρα διάρρηξης', package:'Extra', limit:'Έως €6.000 ανά γεγονός, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 4'},
  {name:'Πρόσκρουση οχήματος', package:'Extra', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 4'},
  {name:'Θύελλα / Καταιγίδα / Πλημμύρα / Χιόνι / Παγετός', package:'Advanced', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'5% επί του ποσού της ζημιάς, ελάχιστο €350', source:'σελ. 5'},
  {name:'Αστική Ευθύνη από διαρροή ύδατος', package:'Advanced', limit:'Έως €1.500 ανά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 5'},
  {name:'Έξοδα άντλησης υδάτων', package:'Advanced', limit:'Έως €900 ανά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 5'},
  {name:'Στάσεις / Απεργίες / Οχλαγωγίες / Πολιτικές Ταραχές', package:'Advanced', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 5'},
  {name:'Κακόβουλη ενέργεια', package:'Advanced', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 5'},
  {name:'Έκρηξη λέβητα / θερμοσίφωνα / φιαλών υγραερίου', package:'Advanced', limit:'Έως €6.000 ανά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 5'},
  {name:'Απώλεια μισθώματος', package:'Advanced', limit:'Έως 10% του ασφαλιζόμενου κεφαλαίου οικοδομής, μέγιστη διάρκεια 12 μήνες', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 5'},
  {name:'Κλοπή περιεχομένου / ζημιές συνεπεία κλοπής', package:'Max', limit:'Βάσει ασφαλιζόμενου κεφαλαίου περιεχομένου', deductible:'5% επί του ποσού της ζημιάς, ελάχιστο €500', source:'σελ. 6'},
  {name:'Ληστεία μετρητών / τραπεζικών επιταγών', package:'Max', limit:'Έως €600 ανά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 6'},
  {name:'Θραύση υαλοπινάκων θυρών / παραθύρων / καθρεπτών', package:'Max', limit:'€600 ανά γεγονός και €900 ετησίως, σε πρώτο κίνδυνο. Ενεργοποίηση μετά από 2 μήνες', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 6'},
  {name:'Βραχυκύκλωμα ηλεκτρικού πίνακα και καλωδιώσεων', package:'Max', limit:'€300 ανά γεγονός και €600 ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 6'},
  {name:'Έξοδα μετακόμισης περιεχομένου', package:'Max', limit:'Έως €600 ανά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 6'},
  {name:'Έξοδα προσωρινής μεταστέγασης περιεχομένου', package:'Max', limit:'Έως €600 ανά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 6'},
  {name:'Έξοδα παραμονής σε ξενοδοχείο μετά από καλυπτόμενη ζημιά', package:'Max', limit:'Μέχρι 30 ημέρες, ανώτατο €1.800 ανά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 6'},
  {name:'Κάλυψη περιεχομένου σε προσωρινή διεύθυνση', package:'Max', limit:'Μέχρι 3 μήνες', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 6'},
  {name:'Πτώση δένδρων / ηλεκτρικών ή τηλεφωνικών στύλων', package:'Max', limit:'Συμπεριλαμβάνεται κόστος απομάκρυνσης έως €300 ανά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 6'},
  {name:'Σεισμός', package:'Προαιρετική', limit:'Βάσει συνολικού ασφαλιζόμενου κεφαλαίου υλικών ζημιών', deductible:'2% επί του συνολικού ασφαλιζόμενου κεφαλαίου υλικών ζημιών σε κάθε ζημιά, ελάχιστο €600', source:'σελ. 6, 8-9'}
];

const businessSimple = [
  {name:'Πυρκαγιά / Πτώση κεραυνού / Έκρηξη', package:'Απλό', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 13'},
  {name:'Πτώση αεροσκαφών ή τμημάτων', package:'Απλό', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 13'},
  {name:'Πυρκαγιά από δάσος', package:'Απλό', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 13'},
  {name:'Έξοδα κατεδάφισης / εκκαθάρισης / μεταφοράς υπολειμμάτων', package:'Απλό', limit:'Έως €1.500 κατά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 13'},
  {name:'Ζημιές οικοδομής από κλοπή μετά από διάρρηξη', package:'Απλό', limit:'Βάσει πίνακα προϊόντος', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 13'},
  {name:'Καταιγίδα / Θύελλα', package:'Πλήρες', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Ζημιές έως €750 αποζημιώνονται εξολοκλήρου. Πάνω από €750: 10% με ελάχιστο €750', source:'σελ. 13'},
  {name:'Πλημμύρα', package:'Πλήρες', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'10% του ποσού αποζημίωσης, ελάχιστο €750', source:'σελ. 13'},
  {name:'Χιόνι / Παγετός', package:'Πλήρες', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Ζημιές έως €750 αποζημιώνονται εξολοκλήρου. Πάνω από €750: 10% με ελάχιστο €750', source:'σελ. 13'},
  {name:'Διάρρηξη / υπερχείλιση σωληνώσεων', package:'Πλήρες', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Ζημιές έως €750 αποζημιώνονται εξολοκλήρου. Πάνω από €750: 10% με ελάχιστο €750', source:'σελ. 14'},
  {name:'Τρομοκρατικές ενέργειες / πολιτικές ταραχές / στάσεις / οχλαγωγίες', package:'Πλήρες', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 14'},
  {name:'Ηλεκτρικές βλάβες εγκαταστάσεων / μηχανημάτων', package:'Πλήρες', limit:'Έως €1.500 κατά γεγονός και €3.000 ετησίως', deductible:'€150 σε κάθε ζημιά', source:'σελ. 14'},
  {name:'Θραύση υαλοπινάκων / βιτρινών', package:'Πλήρες', limit:'Έως €1.800 κατά γεγονός και €3.000 ετησίως. Ενεργοποίηση μετά από 2 μήνες', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 14'},
  {name:'Αστική ευθύνη λειτουργίας επαγγελματικού χώρου', package:'Πλήρες', limit:'Έως €10.000 κατά γεγονός και €20.000 ετησίως', deductible:'Σε υλικές ζημιές €150 σε κάθε ζημιά', source:'σελ. 15'},
  {name:'Ημερήσια αποζημίωση προσωρινής διακοπής εργασιών', package:'Πλήρες', limit:'€150 ανά ημέρα έως 90 ημέρες', deductible:'Απαλλαγή των 3 πρώτων ημερών', source:'σελ. 15'},
  {name:'Σεισμός', package:'Προαιρετική', limit:'Βάσει συνολικού ασφαλιζόμενου κεφαλαίου υλικών ζημιών', deductible:'2% επί του συνολικού ασφαλιζόμενου κεφαλαίου υλικών ζημιών σε κάθε ζημιά', source:'σελ. 15'},
  {name:'Κλοπή περιεχομένου μετά από διάρρηξη', package:'Προαιρετική', limit:'Βάσει ασφαλιζόμενου κεφαλαίου περιεχομένου', deductible:'10% του ποσού αποζημίωσης, ελάχιστο €750', source:'σελ. 15'},
  {name:'Κλοπή χρημάτων συνεπεία ληστείας', package:'Προαιρετική', limit:'Έως €3.000 κατά γεγονός και ετησίως', deductible:'Σύμφωνα με τους όρους της κάλυψης κλοπής', source:'σελ. 15'}
];

const businessPlus = [
  {name:'Πυρκαγιά / Κεραυνός / Έκρηξη / Πτώση αεροσκαφών', package:'Απλό', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 18'},
  {name:'Καπνός', package:'Απλό', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 18'},
  {name:'Έξοδα κατεδάφισης / εκκαθάρισης / συντριμμάτων', package:'Απλό', limit:'5% του συνολικά ασφαλιζόμενου κεφαλαίου κατά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 18'},
  {name:'Έξοδα κατάσβεσης / πυρόσβεσης', package:'Απλό', limit:'Έως €3.000 κατά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 18'},
  {name:'Έξοδα έκδοσης αδειών αποκατάστασης', package:'Απλό', limit:'Έως €5.000 κατά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 18'},
  {name:'Έξοδα αμοιβών μηχανικών / αρχιτεκτόνων', package:'Απλό', limit:'Έως €5.000 κατά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 18'},
  {name:'Όρος πρόνοιας', package:'Απλό', limit:'Έως 10% του ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 18'},
  {name:'Πρόσκρουση οχήματος', package:'Σύνθετο', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 18'},
  {name:'Καταιγίδα / Θύελλα', package:'Σύνθετο', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Έως €1.000 χωρίς απαλλαγή. Πάνω από €1.000: 10%, ελάχιστο €750 για υπόγεια και €500 για λοιπούς χώρους', source:'σελ. 18'},
  {name:'Πλημμύρα', package:'Σύνθετο', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Έως €1.000 χωρίς απαλλαγή. Πάνω από €1.000: 10%, ελάχιστο €750 για υπόγεια και €500 για λοιπούς χώρους', source:'σελ. 18'},
  {name:'Χιόνι / Χαλάζι / Παγετός', package:'Σύνθετο', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'10% του ποσού ζημιάς, ελάχιστο €500', source:'σελ. 18'},
  {name:'Διαρροή / υπερχείλιση σωληνώσεων / sprinklers', package:'Σύνθετο', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Έως €1.000 χωρίς απαλλαγή. Πάνω από €1.000: 10%, ελάχιστο €750 για υπόγεια και €500 για λοιπούς χώρους', source:'σελ. 18'},
  {name:'Έξοδα άντλησης υδάτων', package:'Σύνθετο', limit:'Έως €2.000 κατά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 18'},
  {name:'Ηλεκτρικές βλάβες εγκαταστάσεων / μηχανημάτων', package:'Πλήρες', limit:'Έως €4.000 κατά γεγονός και ετησίως', deductible:'€150 σε κάθε ζημιά', source:'σελ. 19'},
  {name:'Τρομοκρατικές ενέργειες / πολιτικές ταραχές / κακόβουλη ενέργεια', package:'Πλήρες', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'Δεν αναφέρεται απαλλαγή στον πίνακα', source:'σελ. 19'},
  {name:'Προσωρινή στέγαση και μεταφορά', package:'Πλήρες', limit:'Ενοίκιο έως €2.000/μήνα έως 6 μήνες. Μεταφορά/επαναφορά έως €3.000 κατά συμβάν και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 19'},
  {name:'Θραύση υαλοπινάκων / κρυστάλλων', package:'Πλήρες', limit:'Με οικοδομή/βελτιώσεις & περιεχόμενο: €3.000/γεγονός και €6.000 ετησίως. Μόνο περιεχόμενο: €2.000/γεγονός και €4.000 ετησίως. Μετά από 2 μήνες', deductible:'€200 σε κάθε ζημιά, εκτός αν προβλέπεται μεγαλύτερη από την αιτία', source:'σελ. 19'},
  {name:'Ηλεκτρονικός εξοπλισμός κατά παντός κινδύνου', package:'Πλήρες', limit:'Έως €5.000 κατά γεγονός και ετησίως', deductible:'15% επί αποζημίωσης, ελάχιστο €200', source:'σελ. 19'},
  {name:'Αστική ευθύνη από μετάδοση πυρκαγιάς / έκρηξης', package:'Πλήρες', limit:'Έως €30.000 κατά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 19'},
  {name:'Κλοπή περιεχομένου & χρημάτων', package:'Πλήρες', limit:'Κλοπή χρημάτων έως €3.000 κατά γεγονός και ετησίως', deductible:'10% του ποσού αποζημίωσης, ελάχιστο €750', source:'σελ. 20'},
  {name:'Σεισμός', package:'Προαιρετική', limit:'Βάσει συνολικού ασφαλιζόμενου κεφαλαίου υλικών ζημιών', deductible:'2% του συνολικά ασφαλιζόμενου κεφαλαίου υλικών ζημιών σε κάθε ζημιά', source:'σελ. 20'},
  {name:'Αστική ευθύνη λειτουργίας χώρων & εργοδότη', package:'Προαιρετική', limit:'1η επιλογή €100.000 / 2η επιλογή €200.000 κατά γεγονός και ετησίως', deductible:'Υλικές ζημιές: €150 στην 1η επιλογή ή €250 στη 2η επιλογή', source:'σελ. 20'},
  {name:'Απώλεια Κερδών Μικρομεσαίων Επιχειρήσεων', package:'Προαιρετική', limit:'Μέγιστη περίοδος αποζημίωσης 12 μήνες, με περιορισμούς σύμφωνα με το PDF', deductible:'5 πρώτες εργάσιμες ημέρες για καλυπτόμενους κινδύνους εκτός σεισμού, 10 πρώτες εργάσιμες ημέρες για σεισμό', source:'σελ. 21'}
];

const vipCoverages = [
  {name:'Βραχυκύκλωμα με εστία φωτιάς', package:'VIP', limit:'Έως 1% του ασφαλιζόμενου κεφαλαίου κατά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'€200 για βραχυκύκλωμα', source:'σελ. 10'},
  {name:'Κλοπή οικοσκευής με διάρρηξη ή ληστεία μετρητών / επιταγών', package:'VIP', limit:'Έως €1.500 κατά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'10% επί της ζημιάς, ελάχιστο €600', source:'σελ. 10'},
  {name:'Αστική Ευθύνη έναντι τρίτων από πυρκαγιά / έκρηξη / διαρροή ύδατος', package:'VIP', limit:'Έως €30.000 κατά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 10'},
  {name:'Αλλοίωση τροφίμων', package:'VIP', limit:'Έως €3.000 κατά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 10'},
  {name:'Αποκομιδή συντριμμάτων', package:'VIP', limit:'Έως 5% του συνολικά ασφαλισμένου κεφαλαίου, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 10'},
  {name:'Αμοιβές μελετών / επίβλεψης αρχιτεκτόνων / μηχανικών', package:'VIP', limit:'Έως €20.000 κατά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 10'},
  {name:'Έξοδα Δημοσίων Αρχών', package:'VIP', limit:'Έως €20.000 κατά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 10'},
  {name:'Θραύση υαλοπινάκων / καθρεπτών', package:'VIP', limit:'Έως €3.000 κατά γεγονός και €6.000 ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 10'},
  {name:'Πτώση δένδρων / ηλεκτρικών ή τηλεφωνικών στύλων', package:'VIP', limit:'Κόστος απομάκρυνσης έως €1.500 κατά γεγονός και ετησίως, σε πρώτο κίνδυνο', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 10'},
  {name:'Έξοδα μεταφοράς / προσωρινής στέγασης / επαναφοράς', package:'VIP', limit:'Έως 12 μήνες: ενοίκιο έως €3.000/μήνα ή το καταβαλλόμενο/τεκμαρτό, και έξοδα μεταφοράς/επαναφοράς έως €4.000 κατά γεγονός και ετησίως', deductible:'Δεν αναφέρεται απαλλαγή', source:'σελ. 10'},
  {name:'Πλημμύρα / Θύελλα / Καταιγίδα / Χιόνι / Παγετός / Χαλάζι / Σωληνώσεις', package:'VIP', limit:'Βάσει ασφαλιζόμενου κεφαλαίου', deductible:'10% επί της ζημιάς, ελάχιστο €600', source:'σελ. 10'},
  {name:'Σεισμός', package:'Προαιρετική', limit:'Βάσει συνολικού ασφαλιζόμενου κεφαλαίου υλικών ζημιών', deductible:'2% του συνολικού ασφαλιζόμενου κεφαλαίου υλικών ζημιών σε κάθε ζημιά', source:'σελ. 10'},
  {name:'Ατομική και Οικογενειακή Αστική Ευθύνη', package:'Προαιρετική', limit:'Έως €200.000 για σωματικές βλάβες ή/και υλικές ζημιές ανά γεγονός και ετησίως', deductible:'Σε υλικές ζημιές: €150', source:'σελ. 10'}
];

function switchSection(section){
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active-section'));
  document.getElementById(`section-${section}`).classList.add('active-section');
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.section === section));
  document.querySelectorAll('.bottom-tab[data-section]').forEach(b => b.classList.toggle('active', b.dataset.section === section));
  window.scrollTo({top:0, behavior:'smooth'});
}

function includedInHome(pkg, coverage){
  if(coverage.package === 'Προαιρετική') return false;
  return rank[coverage.package] <= rank[pkg];
}

function includedInBusiness(pkg, coverage, order){
  if(coverage.package === 'Προαιρετική') return false;
  return order.indexOf(coverage.package) <= order.indexOf(pkg);
}

function renderCoverageItem(c, i, datasetName, selectable = false){
  const check = selectable ? `<label class="mini-check" title="Επιλογή κάλυψης για την ανάλυση"><input type="checkbox" class="cov" data-index="${i}"></label>` : '';
  return `
    <div class="coverage-row ${selectable ? '' : 'no-check'}">
      ${check}
      <button type="button" class="coverage-btn" onclick="openCoverageModal('${datasetName}', ${i})">
        <span>${c.name}</span>
        <small>${c.package === 'Προαιρετική' ? 'Προαιρετική κάλυψη' : 'Πακέτο: ' + c.package}</small>
      </button>
    </div>`;
}

function renderHomeCoverages(){
  const el = document.getElementById('homeCoverages');
  const packageHtml = packageOrder.map(pkg => {
    const items = homeCoverages.map((c,i)=>({c,i})).filter(x => includedInHome(pkg, x.c)).map(x => renderCoverageItem(x.c, x.i, 'home', true)).join('');
    return `<div class="package-card"><h3>${pkg}</h3><span class="pill">${packageMap[pkg]}</span><div class="package-coverages">${items}</div></div>`;
  }).join('');
  const optionalItems = homeCoverages.map((c,i)=>({c,i})).filter(x => x.c.package === 'Προαιρετική').map(x => renderCoverageItem(x.c, x.i, 'home', true)).join('');
  el.innerHTML = packageHtml + `<div class="package-card optional-card"><h3>Προαιρετικές καλύψεις</h3><div class="package-coverages">${optionalItems}</div></div>`;
}

function renderBusinessGroup(elId, data, order, datasetName){
  const el = document.getElementById(elId);
  const packageHtml = order.map(pkg => {
    const items = data.map((c,i)=>({c,i})).filter(x => includedInBusiness(pkg, x.c, order)).map(x => renderCoverageItem(x.c, x.i, datasetName)).join('');
    return `<div class="package-card"><h3>${pkg}</h3><div class="package-coverages">${items}</div></div>`;
  }).join('');
  const optionalItems = data.map((c,i)=>({c,i})).filter(x => x.c.package === 'Προαιρετική').map(x => renderCoverageItem(x.c, x.i, datasetName)).join('');
  el.innerHTML = packageHtml + `<div class="package-card optional-card"><h3>Προαιρετικές καλύψεις</h3><div class="package-coverages">${optionalItems}</div></div>`;
}

function renderVip(){
  const el = document.getElementById('vipCoverages');
  const basic = vipCoverages.map((c,i)=>({c,i})).filter(x => x.c.package !== 'Προαιρετική').map(x => renderCoverageItem(x.c, x.i, 'vip')).join('');
  const optional = vipCoverages.map((c,i)=>({c,i})).filter(x => x.c.package === 'Προαιρετική').map(x => renderCoverageItem(x.c, x.i, 'vip')).join('');
  el.innerHTML = `<div class="package-card"><h3>VIP — Κατά Παντός Κινδύνου</h3><div class="package-coverages">${basic}</div></div><div class="package-card"><h3>Προαιρετικές καλύψεις</h3><div class="package-coverages">${optional}</div></div>`;
}

function getDataset(name){
  if(name === 'home') return homeCoverages;
  if(name === 'business') return businessSimple;
  if(name === 'businessPlus') return businessPlus;
  if(name === 'vip') return vipCoverages;
  return [];
}

function openCoverageModal(datasetName, index){
  const c = getDataset(datasetName)[index];
  document.getElementById('modalTitle').textContent = c.name;
  document.getElementById('modalLimit').textContent = c.limit;
  document.getElementById('modalDeductible').textContent = c.deductible;
  document.getElementById('modalSource').textContent = `${sourceLabel} — ${c.source}`;
  const modal = document.getElementById('coverageModal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}

function closeCoverageModal(){
  const modal = document.getElementById('coverageModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
}

document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeCoverageModal(); });

function minPackage(selected){
  let maxRank = 1;
  selected.forEach(c => { if(rank[c.package] > maxRank) maxRank = rank[c.package]; });
  return Object.keys(rank).find(k => rank[k] === maxRank && k !== 'Προαιρετική') || 'Basic';
}

function selectedCoverages(){
  const map = new Map();
  [...document.querySelectorAll('#section-home .cov:checked')].forEach(x => map.set(Number(x.dataset.index), homeCoverages[Number(x.dataset.index)]));
  return [...map.values()];
}

function runUnderwriting(){
  const usage = document.getElementById('usage').value;
  const year = Number(document.getElementById('year').value || 0);
  const insured = document.getElementById('insured').value;
  const selected = selectedCoverages();
  const issues = [];
  let status = 'ok', title = '🟢 Αναλαμβάνεται, με βάση τα στοιχεία που δηλώθηκαν';

  if(document.getElementById('bad').checked){status='bad'; title='🔴 Δεν παρέχεται κάλυψη'; issues.push('Δεν παρέχεται κάλυψη για κατοικίες εγκαταλελειμμένες ή σε κακή κατάσταση συντήρησης.');}
  if(document.getElementById('forest').checked){status='bad'; title='🔴 Δεν παρέχεται κάλυψη'; issues.push('Δεν παρέχεται κάλυψη για κατοικίες σε απομονωμένες περιοχές εκτός οικιστικού ιστού ή εντός δασικών εκτάσεων.');}
  if(document.getElementById('wooden').checked){if(status!=='bad'){status='warn'; title='🟠 Απαιτείται έγκριση Κλάδου';} issues.push('Ξύλινη κατοικία: απαιτείται έγκριση Κλάδου, στοιχεία κατασκευής, είδος ξυλείας, τοποθεσία και φωτογραφικό υλικό.');}
  if(document.getElementById('stone').checked || document.getElementById('listed').checked){if(status!=='bad'){status='warn'; title='🟠 Απαιτείται έγκριση Κλάδου';} issues.push('Πέτρινη ή διατηρητέα οικοδομή: απαιτείται έγκριση Κλάδου και ικανοποιητική συντήρηση.');}
  if(document.getElementById('cave').checked && document.getElementById('earthquake').checked){if(status!=='bad'){status='warn'; title='🟠 Απαιτείται προσοχή';} issues.push('Σε υπόσκαφα κτίρια δεν παρέχεται κάλυψη σεισμού.');}
  if(usage.includes('Airbnb')){issues.push('Airbnb χωρίς άδεια ΕΟΤ: μπορεί να ασφαλιστεί στο Full Home για περιεχόμενο μέχρι Advanced, εκτός διαφορετικής συμφωνίας με τον Κλάδο.');}
  if(usage.includes('Εξοχική') && document.getElementById('theft').checked){if(status!=='bad'){status='warn'; title='🟠 Αναλαμβάνεται με προϋποθέσεις';} issues.push('Κλοπή σε εξοχική: απαιτείται να ασφαλίζεται και η μόνιμη κατοικία στην Εταιρία, να μην είναι απομονωμένη χωρίς μέτρα προστασίας και να υπάρχει καθαρό ιστορικό ζημιών. Συνήθης απαλλαγή 15%, ελάχιστο €1.500.');}
  if(document.getElementById('earthquake').checked){issues.push(year && year < 1960 ? 'Σεισμός πριν το 1960: απαιτείται έντυπο σεισμού και δελτίο τρωτότητας από μηχανικό, πιθανώς και φωτογραφικό υλικό.' : 'Σεισμός: απαιτείται υπογεγραμμένο έντυπο σεισμού με δηλώσεις για νόμιμη άδεια, αντισεισμική κατασκευή και ιστορικό ζημιών.');}
  if(year && year < 1950){issues.push('Κτίριο προ του 1950: ασφάλιση αποκλειστικά σε τρέχουσα πραγματική αξία.');}

  const pkg = minPackage(selected);
  const rows = selected.map(c=>`<tr><td>${c.name}</td><td>${c.package}</td><td>${c.limit}</td><td>${c.deductible}</td><td>${c.source}</td></tr>`).join('');
  document.getElementById('result').innerHTML = `
    <div class="status ${status}">${title}</div>
    <div class="note"><b>Προτεινόμενο πακέτο:</b> ${pkg} <small>(${packageMap[pkg] || ''})</small><br><b>Ασφαλιζόμενο:</b> ${insured}</div>
    <h3>Τι να προσέξω</h3>
    ${issues.length ? '<ul>'+issues.map(i=>`<li>${i}</li>`).join('')+'</ul>' : '<p>Δεν εντοπίστηκε ειδικός περιορισμός από τις απαντήσεις.</p>'}
    <h3>Καλύψεις / Όρια / Απαλλαγές</h3>
    ${selected.length ? `<table><thead><tr><th>Κάλυψη</th><th>Πακέτο</th><th>Όριο</th><th>Απαλλαγή</th><th>Πηγή</th></tr></thead><tbody>${rows}</tbody></table>` : '<p class="muted">Δεν επιλέχθηκαν καλύψεις.</p>'}
    <p class="muted">Οι απαντήσεις βασίζονται στο εγχειρίδιο Πυρός που φορτώθηκε στο AI Underwriter.</p>`;
}


function money(n){
  return Number(n || 0).toLocaleString('el-GR');
}

function runBusinessUnderwriting(){
  const product = document.getElementById('bizProduct').value;
  const use = (document.getElementById('bizUse').value || '').trim();
  const insured = document.getElementById('bizInsured').value;
  const building = Number(document.getElementById('bizBuildingCapital').value || 0);
  const content = Number(document.getElementById('bizContentCapital').value || 0);
  const total = building + content;
  const issues = [];
  const docs = [];
  let status = 'ok';
  let title = '🟢 Αναλαμβάνεται, με βάση τα στοιχεία που δηλώθηκαν';

  const setWarn = (t='🟠 Απαιτείται έλεγχος / έγκριση Κλάδου') => { if(status !== 'bad'){ status='warn'; title=t; } };
  const setBad = (t='🔴 Δεν παρέχεται κάλυψη / δεν προχωρά χωρίς διόρθωση') => { status='bad'; title=t; };

  if(content > 900000){ setBad(); issues.push('Το περιεχόμενο στο προϊόν Εθνική & Επιχείρηση έχει ανώτατο ασφαλιζόμενο κεφάλαιο €900.000.'); }
  if(total > 4400000){ setBad(); issues.push('Το συνολικό ασφαλιζόμενο κεφάλαιο οικοδομής και περιεχομένου δεν πρέπει να ξεπερνά τα €4.400.000.'); }
  if(!document.getElementById('bizLicense').checked){ setWarn(); issues.push('Πρέπει να ελεγχθεί ότι υπάρχει άδεια λειτουργίας, όπου απαιτείται από τη νομοθεσία.'); }
  if(!document.getElementById('bizFireCert').checked){ setWarn(); issues.push('Πρέπει να υπάρχουν, να συντηρούνται και να λειτουργούν τα προβλεπόμενα μέτρα πυροπροστασίας.'); }
  if(!document.getElementById('bizFireCertValid').checked){ setWarn(); issues.push('Όπου απαιτείται Πιστοποιητικό Πυροσβεστικής, πρέπει να είναι σε ισχύ και να αποστέλλεται όταν ζητηθεί.'); }

  if(document.getElementById('bizExcludedUse').checked){ setBad(); issues.push('Η χρήση/επάγγελμα δηλώθηκε ως εξαιρούμενη. Ενδεικτικά το εγχειρίδιο αναφέρει εξαιρέσεις όπως κοσμηματοπωλεία, κέντρα διασκέδασης, χαρτοπαικτικές λέσχες, logistics και καταστήματα/αποθήκες πλαστικών ειδών αφρώδους ή διογκωμένης πολυουρεθάνης.'); }
  if(document.getElementById('bizThirdPartyContent').checked){ setWarn(); issues.push('Περιεχόμενο τρίτων γενικά εξαιρείται, εκτός μεμονωμένων περιπτώσεων με έγκριση Κλάδου.'); }

  if(document.getElementById('bizTheft').checked){
    if(!document.getElementById('bizProtection').checked){ setWarn('🟠 Κλοπή: απαιτείται έλεγχος μέτρων προστασίας'); issues.push('Για κλοπή περιεχομένου απαιτούνται ικανοποιητικά μέτρα προστασίας, ρητά προσδιορισμένα στην πρόταση, ανάλογα με αντικείμενο, κεφάλαιο και ιστορικό ζημιών.'); }
    else { issues.push('Για κλοπή περιεχομένου η επάρκεια των μέτρων προστασίας εξετάζεται από τον Κλάδο.'); }
  }

  if(document.getElementById('bizEarthquake').checked){
    docs.push('Υπογεγραμμένο έντυπο σεισμού.');
    if(document.getElementById('bizPre1960').checked){ setWarn('🟠 Σεισμός πριν το 1960: απαιτείται πρόσθετος έλεγχος'); issues.push('Για κτίριο πριν το 1960 απαιτείται δελτίο τρωτότητας υπογεγραμμένο από μηχανικό και φωτογραφικό υλικό αν ζητηθεί.'); docs.push('Δελτίο τρωτότητας μηχανικού και πιθανό φωτογραφικό υλικό.'); }
    else { issues.push('Για σεισμό απαιτείται δήλωση ότι το κτίριο είναι μετά το 1960, με νόμιμη άδεια, αντισεισμικής κατασκευής και χωρίς μη αποκατεστημένες ζημιές από σεισμό.'); }
  }

  if(document.getElementById('bizEmbassyParty').checked){ setBad(); issues.push('Δεν παρέχεται το σετ τρομοκρατικών ενεργειών και κατά συνέπεια το πλήρες πακέτο που το περιλαμβάνει σε πρεσβείες και γραφεία πολιτικών κομμάτων.'); }
  if(document.getElementById('bizTerrorArea').checked){
    if(!document.getElementById('bizMetalShutters').checked){ setWarn('🟠 Τρομοκρατικές ενέργειες: απαιτούνται ρολά ασφαλείας'); issues.push('Σε περιοχές όπως κέντρο Αθήνας, Εξάρχεια και περιοχή Πολυτεχνείου, για το σετ τρομοκρατικών ενεργειών απαιτούνται συμπαγή μεταλλικά ρολά ασφαλείας σε όλες τις εξωτερικές πλευρές.'); }
  }

  if(product.includes('PLUS')){ issues.push('Το προϊόν PLUS είναι βελτιωμένη έκδοση με μεγαλύτερο εύρος καλύψεων.'); }
  const suggested = product.includes('PLUS') ? 'Εθνική & Επιχείρηση PLUS' : 'Εθνική & Επιχείρηση';
  const docHtml = docs.length ? '<ul>'+docs.map(d=>`<li>${d}</li>`).join('')+'</ul>' : '<p>Δεν προέκυψαν πρόσθετα δικαιολογητικά από τις απαντήσεις, πέρα από όσα ζητήσει ο Κλάδος ανά περίπτωση.</p>';

  document.getElementById('businessResult').innerHTML = `
    <div class="status ${status}">${title}</div>
    <div class="note"><b>Προϊόν:</b> ${suggested}<br><b>Χρήση:</b> ${use || 'Δεν συμπληρώθηκε'}<br><b>Ασφαλιζόμενο:</b> ${insured}<br><b>Κεφάλαια:</b> Οικοδομή €${money(building)} / Περιεχόμενο €${money(content)} / Σύνολο €${money(total)}</div>
    <h3>Τι να προσέξω</h3>
    ${issues.length ? '<ul>'+issues.map(i=>`<li>${i}</li>`).join('')+'</ul>' : '<p>Δεν εντοπίστηκε ειδικός περιορισμός από τις απαντήσεις.</p>'}
    <h3>Απαιτούμενα / δικαιολογητικά</h3>
    ${docHtml}
    <h3>Βασικοί κανόνες από το εγχειρίδιο</h3>
    <ul>
      <li>Η οικοδομή ασφαλίζεται χωρίς περιορισμό ανώτατου κεφαλαίου σε αξία καινούργιου.</li>
      <li>Το περιεχόμενο ασφαλίζεται έως €900.000 σε τρέχουσα πραγματική αξία.</li>
      <li>Το συνολικό κεφάλαιο οικοδομής και περιεχομένου δεν πρέπει να ξεπερνά τα €4.400.000.</li>
      <li>Για κλοπή απαιτούνται επαρκή μέτρα προστασίας και έλεγχος από Κλάδο.</li>
      <li>Για σεισμό απαιτείται έντυπο σεισμού, ενώ για κτίρια πριν το 1960 απαιτείται δελτίο τρωτότητας.</li>
    </ul>
    <p class="muted">Πηγή: PDF Οδηγίες Ανάληψης Πυρός — σελ. 16-17 και 22-23.</p>`;
}

renderHomeCoverages();
renderBusinessGroup('businessCoverages', businessSimple, ['Απλό','Πλήρες'], 'business');
renderBusinessGroup('businessPlusCoverages', businessPlus, ['Απλό','Σύνθετο','Πλήρες'], 'businessPlus');
renderVip();


// Mobile search: filters visible coverage buttons and gives quick suggestions.
const quickTerms = ['Airbnb', 'Σεισμός', 'Κλοπή', 'Πλημμύρα', 'Διαρροή', 'Πυροπροστασία', 'VIP', 'Αστική Ευθύνη'];
function normalizeText(v){ return (v || '').toString().toLocaleLowerCase('el-GR'); }
function handleSearch(value){
  const q = normalizeText(value).trim();
  const sug = document.getElementById('searchSuggestions');
  if(!sug) return;
  const terms = q ? quickTerms.filter(t => normalizeText(t).includes(q) || q.includes(normalizeText(t))).slice(0,5) : quickTerms.slice(0,5);
  sug.innerHTML = terms.map(t => `<button type="button" onclick="applySuggestion('${t.replace(/'/g, "\\'")}')">${t}</button>`).join('');
  filterCoverageButtons(q);
}
function applySuggestion(term){
  const input = document.getElementById('globalSearch');
  input.value = term;
  handleSearch(term);
  const first = [...document.querySelectorAll('.active-section .coverage-row')].find(r => r.style.display !== 'none');
  if(first) first.scrollIntoView({behavior:'smooth', block:'center'});
}
function filterCoverageButtons(q){
  document.querySelectorAll('.coverage-row').forEach(row => {
    const btn = row.querySelector('.coverage-btn');
    if(!btn) return;
    const original = btn.dataset.original || btn.querySelector('span').textContent;
    btn.dataset.original = original;
    const text = normalizeText(btn.textContent);
    const show = !q || text.includes(q);
    row.style.display = show ? '' : 'none';
    const span = btn.querySelector('span');
    span.innerHTML = original;
    if(q && show){
      const idx = normalizeText(original).indexOf(q);
      if(idx >= 0){
        span.innerHTML = original.slice(0, idx) + '<mark>' + original.slice(idx, idx+q.length) + '</mark>' + original.slice(idx+q.length);
      }
    }
  });
}
function showSourceHint(){
  const txt = document.getElementById('modalSource').textContent || 'Πηγή: εγχειρίδιο Πυρός';
  alert(txt + '\n\nΣτην επόμενη έκδοση θα ανοίγει απευθείας η αντίστοιχη σελίδα του PDF μέσα στην εφαρμογή.');
}
document.addEventListener('DOMContentLoaded', () => handleSearch(''));
