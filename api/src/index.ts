import app from "./app";
import connectToDatabase from "./database";"./database";

connectToDatabase()

app.listen(app.get('port'), () => {
  console.log("server on port", app.get('port'));
});
