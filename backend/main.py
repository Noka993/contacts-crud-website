from flask import request, jsonify # type: ignore
from config import app, db
from models import Contact
from helpers import response_message

@app.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = [contact.to_json() for contact in contacts]
    return jsonify({
        "contacts": json_contacts
    })

@app.route('/create_contact', methods=['POST'])
def create_contact():
    first_name = request.json.get('firstName')
    last_name = request.json.get('lastName')
    email = request.json.get('email')

    if not first_name or not last_name or not email:
        return response_message("All fields are required")

    new_contact = Contact(first_name=first_name, last_name=last_name, email=email)
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return response_message(str(e))
    
    print(first_name, last_name, email)
    return response_message("Contact created successfully", 201)

@app.route('/update_contact/<int:user_id>', methods=['PATCH'])
def update_contact(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return response_message("Contact not found", 404)
    
    data = request.json
    contact.first_name = data.get("firstName", contact.first_name)
    contact.last_name = data.get("lastName", contact.last_name)
    contact.email = data.get("email", contact.email)

    try:
        db.session.commit()
    except Exception as e:
        return response_message(str(e))
    
    return response_message("Contact updated", 200)

@app.route('/delete_contact/<int:user_id>', methods=['DELETE'])
def delete_contact(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return response_message("Contact not found", 404)
    
    try:
        db.session.delete(contact)
        db.session.commit()
    except Exception as e:
        return response_message(str(e))
    
    return response_message("Contact deleted", 200)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)