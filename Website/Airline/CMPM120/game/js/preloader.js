
var preloaderState = {
    
	preload: function(){
		game.load.script('Fire', 'CMPM120/game/js/Fire.js');
		game.load.spritesheet('player','CMPM120/game/assets/img/dude.png', 32, 48);
		game.load.image('fist', 'CMPM120/game/assets/img/fist.jpg');
		game.load.image('hitbox', 'CMPM120/game/assets/img/hitbox.png');
		game.load.image('bg', 'CMPM120/game/assets/img/bg.png');
        game.load.image('sky', 'CMPM120/game/assets/img/menubg/background.png');
        game.load.image('clouds', 'CMPM120/game/assets/img/menubg/clouds.png');
        game.load.image('plane', 'CMPM120/game/assets/img/menubg/foreground.png');
        game.load.image('health_full','CMPM120/game/assets/img/health_full.png');
        game.load.image('health_empty','CMPM120/game/assets/img/health_empty.png');
        game.load.image('health_damage','CMPM120/game/assets/img/health_damage.png');
        game.load.image('logo','CMPM120/game/assets/img/Logo.png');
        game.load.image('flogo','CMPM120/game/assets/img/flamelogo.png');
		game.load.image('scorp_ID','CMPM120/game/assets/img/Scorpion_Passport.png');
		game.load.image('rabbit_ID','CMPM120/game/assets/img/Rabbit_passport.png');
		game.load.image('guard_ID','CMPM120/game/assets/img/SecurityGuard_passport.png');
		game.load.image('control1','CMPM120/game/assets/img/Controls1.png');
		game.load.image('control2','CMPM120/game/assets/img/Controls.png');
        game.load.image('pause_menu','CMPM120/game/assets/img/menu_bg_temp.png');
		game.load.image('controls1_menu','CMPM120/game/assets/img/Player1_Controls.png');
		game.load.image('controls2_menu','CMPM120/game/assets/img/Player2_Controls.png');
		game.load.image('CharBG_GC', 'CMPM120/game/assets/img/CharSelectBG_GC.png');
		game.load.image('CharBG_NB', 'CMPM120/game/assets/img/CharSelectBG_NB.png');
		game.load.image('closed', 'CMPM120/game/assets/img/GateClosed.png');
		game.load.image('boarding', 'CMPM120/game/assets/img/NowBoarding.png');
        game.load.image('round_unresolved','CMPM120/game/assets/img/round_unresolved3.png');
        game.load.image('round_won','CMPM120/game/assets/img/round_resolved3.png');
		game.load.image('arrow','CMPM120/game/assets/img/Arrow.png');
		game.load.image('selectBox','CMPM120/game/assets/img/selectBox.png');
		game.load.image('selectBox2','CMPM120/game/assets/img/selectBox2.png');
        game.load.image('health_border','CMPM120/game/assets/img/health_border.png');
        game.load.image('special_full','CMPM120/game/assets/img/special_full.png');
        game.load.image('special_empty','CMPM120/game/assets/img/special_empty.png');
        game.load.image('special_used','CMPM120/game/assets/img/special_used.png');
        game.load.image('special_border','CMPM120/game/assets/img/special_border.png');
        game.load.image('frozen_ice','CMPM120/game/assets/img/frozen.png');
        game.load.image('alt_frozen_ice','CMPM120/game/assets/img/frozen2.png');
        game.load.image('croissant','CMPM120/game/assets/img/croissant.png');
        game.load.image('eiffel','CMPM120/game/assets/img/Eiffel_Tower.png');
        game.load.image('murica','CMPM120/game/assets/img/murica.png');

        
        //Xbox
        game.load.image('controller','CMPM120/game/assets/img/controller.png');
        game.load.image('A','CMPM120/game/assets/img/Xbox_Controls/A_Button.png');
        game.load.image('B','CMPM120/game/assets/img/Xbox_Controls/B_Button.png');
        game.load.image('Y','CMPM120/game/assets/img/Xbox_Controls/Y_Button.png');
        game.load.image('X','CMPM120/game/assets/img/Xbox_Controls/X_Button.png');
        game.load.image('Start_Button','CMPM120/game/assets/img/Xbox_Controls/Start_Button.png');
        game.load.image('Joystick_Left','CMPM120/game/assets/img/Xbox_Controls/Joystick_Left.png');
        game.load.image('Joystick_Right','CMPM120/game/assets/img/Xbox_Controls/Joystick_Right.png');
        game.load.image('Joystick_Up','CMPM120/game/assets/img/Xbox_Controls/Joystick_Up.png');
        game.load.image('Joystick_Down','CMPM120/game/assets/img/Xbox_Controls/Joystick_Down.png');
		game.load.image('JoystickL','CMPM120/game/assets/img/Xbox_Controls/JoystickL.png');
		game.load.image('JoystickR','CMPM120/game/assets/img/Xbox_Controls/JoystickR.png');
        game.load.image('bumperL','CMPM120/game/assets/img/Xbox_Controls/Left_Bumper.png');
        game.load.image('bumperR','CMPM120/game/assets/img/Xbox_Controls/Right_Bumper.png');
        

        //Parisian
        game.load.image('beret1','CMPM120/game/assets/img/Parisian/Red_Beret.png');
        game.load.image('beret2','CMPM120/game/assets/img/Parisian/Green_Beret.png');
        game.load.image('beret3','CMPM120/game/assets/img/Parisian/Yellow_Beret.png');
        game.load.image('beret4','CMPM120/game/assets/img/Parisian/Purple_Beret.png');
        game.load.image('moustache1','CMPM120/game/assets/img/Parisian/Moustache1.png');
        game.load.image('moustache2','CMPM120/game/assets/img/Parisian/Moustache2.png');
        game.load.image('moustache3','CMPM120/game/assets/img/Parisian/Moustache3.png');
        game.load.image('moustache4','CMPM120/game/assets/img/Parisian/Moustache4.png');

        
        //simon
        game.load.atlas('rabbit_atlas','CMPM120/game/assets/img/simon/spritesheet.png','CMPM120/game/assets/img/simon/sprites.json');
        game.load.atlas('rabbit_atlas2','CMPM120/game/assets/img/simon/alt/spritesheet.png','CMPM120/game/assets/img/simon/alt/sprites.json');
        game.load.image('rabbit_blood','CMPM120/game/assets/img/simon/FrozenRabbit_blood.png');
        game.load.image('rabbit_cryomancy','CMPM120/game/assets/img/simon/FrozenRabbit_heavy.png');
        game.load.image('rabbit_trail','CMPM120/game/assets/img/simon/FrozenRabbit_part.png');
        game.load.image('rabbit_curse','CMPM120/game/assets/img/simon/FrozenRabbit_curse.png');
        game.load.image('ice_spikes','CMPM120/game/assets/img/simon/icespikes.png');
        game.load.image('alt_ice_spikes','CMPM120/game/assets/img/simon/altice.png');
        game.load.image('ice_orb','CMPM120/game/assets/img/simon/iceorb.png');
        game.load.image('alt_ice_orb','CMPM120/game/assets/img/simon/iceorb2.png');


        //Scorpion
        /*
        game.load.image('scorpion_idle','assets/img/Scorpion/Scorpion_Idle.png');
        game.load.image('scorpion_crouch','assets/img/Scorpion/Scorpion_crouch.png');
        game.load.image('scorpion_jump','assets/img/Scorpion/Scorpion_Jump.png');
        game.load.image('scorpion_A','assets/img/Scorpion/Scorpion_LightAttack.png');
        game.load.image('scorpion_B1','assets/img/Scorpion/Scorpion_HeavyAttackCharge.png');
        game.load.image('scorpion_B2','assets/img/Scorpion/Scorpion_HeavyAttack.png');
        game.load.image('scorpion_down','assets/img/Scorpion/Scorpion_Down.png');
        game.load.image('scorpion_stagger','assets/img/Scorpion/Scorpion_stagger.png');
        //game.load.image('scorpion_walk1','assets/img/Scorpion/Scorpion_walk_1.png');
        //game.load.image('scorpion_walk2','assets/img/Scorpion/Scorpion_walk_2.png');
        game.load.spritesheet('scorp_walk','assets/img/Scorpion/scorp_walk.png', 741, 660);
        */
        //changes needed: divekick, jump, heavyattack
        game.load.atlas('scorpion_atlas', 'CMPM120/game/assets/img/Scorpion/spritesheet.png','CMPM120/game/assets/img/Scorpion/sprites.json');
        game.load.atlas('scorpion_chain', 'CMPM120/game/assets/img/Scorpion/scorpion_chain.png','CMPM120/game/assets/img/Scorpion/chain.json');
        game.load.atlas('scorpion_atlas2', 'CMPM120/game/assets/img/Scorpion/alt/spritesheet.png','CMPM120/game/assets/img/Scorpion/sprites.json');
        game.load.image('scorpion_blood','CMPM120/game/assets/img/Scorpion/Scorpion_blood.png');
        game.load.image('scorpion_curse','CMPM120/game/assets/img/Scorpion/Scorpion_curse.png');

		//insert assets to load here NH
        
        //Security
        game.load.atlas('security_atlas', 'CMPM120/game/assets/img/Security/security_spritesheet.png','CMPM120/game/assets/img/Security/security_spritesheet.json');
        game.load.atlas('security_atlas2','CMPM120/game/assets/img/Security/security_alt_spritesheet.png','CMPM120/game/assets/img/Security/security_alt_spritesheet.json');
        game.load.image('security_blood','CMPM120/game/assets/img/Security/securityguard_blood.png');
        game.load.image('water_bottle','CMPM120/game/assets/img/Water_Bottle.png');
        game.load.image('pepsi','CMPM120/game/assets/img/Pepsi.png')

        //Parisian
        game.load.atlas('scorpion_atlasP', 'CMPM120/game/assets/img/Scorpion/scorpion_spritesheet_parisian.png','CMPM120/game/assets/img/Scorpion/sprites.json');
        game.load.atlas('scorpion_atlas2P', 'CMPM120/game/assets/img/Scorpion/alt/Scorpion_alt_spritesheet_parisian.png','CMPM120/game/assets/img/Scorpion/sprites.json');
        game.load.atlas('security_atlasP', 'CMPM120/game/assets/img/Security/security_spritesheet_Parisian.png','CMPM120/game/assets/img/Security/security_spritesheet.json');
         game.load.atlas('security_atlas2P','CMPM120/game/assets/img/Security/security_alt_spritesheet_parisian.png','CMPM120/game/assets/img/Security/security_alt_spritesheet.json');
        game.load.atlas('rabbit_atlasP','CMPM120/game/assets/img/simon/spritesheet_parisian.png','CMPM120/game/assets/img/simon/sprites.json');
        game.load.atlas('rabbit_atlas2P','CMPM120/game/assets/img/simon/alt/spritesheet_parisian.png','CMPM120/game/assets/img/simon/alt/sprites.json');
        
        
        //audio 
        game.load.audio('jump_sound', ['CMPM120/game/assets/audio/jump.mp3','CMPM120/game/assets/audio/jump.ogg']); 
        game.load.audio('light',['CMPM120/game/assets/audio/hit8.mp3','CMPM120/game/assets/audio/hit8.ogg']);
        game.load.audio('heavy',['CMPM120/game/assets/audio/hit18.mp3','CMPM120/game/assets/audio/hit18.ogg']);
        game.load.audio('dive',['CMPM120/game/assets/audio/hit9.mp3','CMPM120/game/assets/audio/hit9.ogg']);
        game.load.audio('block',['CMPM120/game/assets/audio/hit2.mp3','CMPM120/game/assets/audio/hit2.ogg']);
        game.load.audio('heavy_charge',['CMPM120/game/assets/audio/heavy_charge.mp3','CMPM120/game/assets/audio/heavy_charge.ogg']);
        game.load.audio('perfect_block',['CMPM120/game/assets/audio/block.mp3','CMPM120/game/assets/audio/block.ogg']);
        game.load.audio('throw',['CMPM120/game/assets/audio/throw.mp3','CMPM120/game/assets/audio/throw.ogg']);
        game.load.audio('super',['CMPM120/game/assets/audio/Steel_Rods.mp3','CMPM120/game/assets/audio/Steel_Racks.ogg']);
        game.load.audio('select',['CMPM120/game/assets/audio/select.mp3','CMPM120/game/assets/audio/select.ogg']);
        game.load.audio('deselect',['CMPM120/game/assets/audio/deselect.mp3','CMPM120/game/assets/audio/deselect.ogg']);
        game.load.audio('frozen',['CMPM120/game/assets/audio/frozen.mp3','CMPM120/game/assets/audio/frozen.ogg']);
        game.load.audio('chain_hit',['CMPM120/game/assets/audio/ScorpSpecial.mp3','CMPM120/game/assets/audio/ScorpSpecial.ogg']);

        
        //music
        game.load.audio('local_forecast',['CMPM120/game/assets/audio/Local_Forecast.mp3','CMPM120/game/assets/audio/Local_Forecast.ogg']);
        game.load.audio('exit_the_premises',['CMPM120/game/assets/audio/Exit_the_Premises.mp3','CMPM120/game/assets/audio/Exit_the_Premises.ogg']);
        game.load.audio('ouroboros',['CMPM120/game/assets/audio/Ouroboros.mp3','CMPM120/game/assets/audio/Ouroboros.ogg']);
        game.load.audio('kick_shock',['CMPM120/game/assets/audio/Kick_Shock.mp3','CMPM120/game/assets/audio/Kick_Shock.ogg']);
        game.load.audio('ultra_polka',['CMPM120/game/assets/audio/Ultra_Polka.mp3','CMPM120/game/assets/audio/Ultra_Polka.ogg']);
        game.load.audio('parisian',['CMPM120/game/assets/audio/Parisian.mp3','CMPM120/game/assets/audio/Parisian.ogg']);
        game.load.audio('shoegazer',['CMPM120/game/assets/audio/Shoegazer.mp3','CMPM120/game/assets/audio/Shoegazer.ogg']);
        game.load.audio('patriotism',['CMPM120/game/assets/audio/Patriotism.mp3', 'CMPM120/game/assets/audio/Patriotism.ogg']);
        
	},

	create: function(){
		//game.state.start('main');
                //game.state.start('charSelect');
                game.state.start('title');
	}

};