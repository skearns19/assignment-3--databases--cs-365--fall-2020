const db = "passwords";
const database = db.getSiblingDB(db);
myObjectId = ObjectId();
myTimestamp = myObjectId.getTimestamp();
print(myTimestamp);
mongoimport --db passwords --collection thePasswordsCollection  --file usertabledatabase.json;
mongoimport --db passwords --collection thePasswordsCollection  --file logininfoandpassworddatabase.json;
database.thePasswordsCollection.updateMany({"password.passwordcreated":myTimestamp});
database.thePasswordsCollection.insert({"login_information":{"username":"IJohn346","websiteName":"ESPN","URL":"https://www.espn.com", "comment": ""},"password":{"passwordForWebsite":"IsaiahSports10","passwordcreated": myTimestamp}});
database.thePasswordsCollection.find({"password.passwordForWebsite": "I$a1ah45"}, {"password.passwordForWebsite": 1,"_id": 0}).pretty();
database.thePasswordsCollection.find({"login_information.URL": "https://www.google.com"}, {"password.passwordForWebsite": 1, "login_information.websiteName": 1, "login_information.comment": 1, "login_information.username": 1, "login_information.URL": 1, "password.passwordcreated": 1, "_id": 0}).pretty();
database.thePasswordsCollection.update({"password.passwordForWebsite": "I$a1ah45"}, {"$set": {"login_information.URL": "https://www.microsoft.com"}});
database.thePasswordsCollection.update({"password.passwordForWebsite": "Isaiah$g1thub"}, {"$set": {"password.passwordForWebsite": "newpassword"}});
database.thePasswordsCollection.update({"password.passwordcreated": "Oct2017"}, {"$unset": {"password.passwordForWebsite": "Ch@tisa1ah"}});