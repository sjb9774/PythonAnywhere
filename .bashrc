# Load up standard site-wide settings.
source /etc/bashrc
alias rollout='git push origin && git push live'
alias root='cd ~/Projects/sjb9774/projectmanager'
alias dbup='ssh -fL 3306:mysql.server:3306 sjb9774@ssh.pythonanywhere.com -N'
alias dbin='mysql -u sjb9774 -p216224 -h 127.0.0.1 --port 3306'
