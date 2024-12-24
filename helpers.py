import tinytuya




def connect_devise(devise_id=None,address=None,local_key=None,version=None):
	
	devise = tinytuya.OutletDevice(

		    dev_id=devise_id,

		    address=address,    

		    local_key=local_key, 

		    version=version
	)


	return devise



