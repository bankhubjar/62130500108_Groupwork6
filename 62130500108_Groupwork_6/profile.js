const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true, 
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    chosensubject: {
        presence: true
    }
}

const app = {
    data() {
        return {
            showdata: {
                profilepic: './images/me.jpg',
                firstname: 'Jakkrapop',
                lastname: 'Chivrarerk',
                Position: 'SIT Student',
                age:21,
                gender: 'M',
                email: 'Jakkrapop.sit@maik.kmutt.ac.th',
                phone: '091-873-7961',
                chosensubject: []
            },
            formdata: {
                firstname: null,
                lastname: null,
                age: null,
                gender: null,
                email: null,
                phone: null,
                chosensubject: [],
            },
            subject_lists: [
            { subject_id: 1, subject_name: 'INT 203 Web based client Side' },
            { subject_id: 2, subject_name: 'INT 204 Web based Server Side' },
            { subject_id: 3, subject_name: 'INT 206 Advanced Database' },
            { subject_id: 4, subject_name: 'INT 208 Network II' },
            { subject_id: 5, subject_name: 'INT 209 DevOps' },
            { subject_id: 6, subject_name: 'INT 210 Architecture Integration' },
            { subject_id: 7, subject_name: 'INT 221 Integrated IT Project' },
            { subject_id: 8, subject_name: 'LNG 308 Technical Report Writing' }]
            ,
            errors: null,
            RegistrationForm: false,
        }
    },
    methods: {
        checkForm() {
            this.errors = validate(this.formdata, constraints)
            if (!this.errors) {
                Object.assign(this.showdata,this.formdata)
                alert("Your profile is updated successfully")
            }
        },
        close_error() {
            this.errors = null
        },
        toggleRegistration(){
            this.RegistrationForm = !this.RegistrationForm;
        }
    }

}
Vue.createApp(app).mount('#app')