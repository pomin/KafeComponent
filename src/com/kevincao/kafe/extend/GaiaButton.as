package com.kevincao.kafe.extend 
{
	import com.gaiaframework.api.Gaia;
	import com.kevincao.kafe.KafeButton;

	/**
	 * @author Kevin Cao
	 */
	public class GaiaButton extends KafeButton 
	{

		private var _branch : String;

		public function get branch() : String 
		{
			return _branch;
		}

		public function set branch(value : String) : void 
		{
			_branch = value;
		}

		public function GaiaButton(skin : Object)
		{
			super(skin);
		}

		override public function goto() : void 
		{
			if(_branch && _branch != "") {
				Gaia.api.goto(_branch);
			} else {
				if(href && href != "") {
					Gaia.api.href(href, window);
				}
			}
		}
	}
}
