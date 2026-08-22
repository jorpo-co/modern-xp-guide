certs:
	mkdir -p config/certs
	mkcert -cert-file config/certs/modern-xp.jorpo.loco.crt \
		-key-file config/certs/modern-xp.jorpo.loco.key \
    	modern-xp.jorpo.loco
