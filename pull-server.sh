#!bin/bash
git add .

read message
echo "Mensagem do commit: "
git commit -m "$message"
git push origen main
