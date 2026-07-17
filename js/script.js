const show = () => {
    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("no").value;
    const DOB = document.getElementById("date").value;

    // Get selected gender
    let gender = "";
    const genders = document.getElementsByName("Gender");

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
            break;
        }
    }

    // Get selected qualifications
    let qualification = [];
    const qualify = document.getElementsByClassName("Qualification");

    for (let i = 0; i < qualify.length; i++) {
        if (qualify[i].checked) {
            qualification.push(qualify[i].value);
        }
    }

    // Get selected image
    const imageInput = document.getElementById("im");
    const image = imageInput.files[0];

    let imageHTML = "No image selected";

    if (image) {
        const imageURL = URL.createObjectURL(image);
        imageHTML = `<img src="${imageURL}" width="200" height="200" alt="Selected Image">`;
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <h2>Registration Details</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Password:</b> ${password}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Qualification:</b> ${qualification.join(", ")}</p>
        <p><b>D.O.B:</b> ${DOB}</p>

        <p><b>Selected Image:</b></p>
        ${imageHTML}
    `;
};