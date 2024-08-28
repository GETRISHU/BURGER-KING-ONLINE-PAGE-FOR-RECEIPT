
<script language="javascript">

function amount()
{
	var a=0,b,c;
	if( document.jha.clk1.checked==true)
		{
		a=a+300;
		}
	if( document.jha.clk2.checked==true)
		{
		a=a+400;
		}
	if( document.jha.clk3.checked==true)
		{
		a=a+450;
		}
	if( document.jha.clk4.checked==true)
		{
		a=a+500;
		}
	if( document.jha.clk5.checked==true)
		{
		a=a+550;
		}
	if( document.jha.clk6.checked==true)
		{
		a=a+50;
		}
		document.jha.tamt.value=a;

{
 b=(0.08*a);
}
	document.jha.Gst.value=b;
{
 c=a+b;
}
	document.jha.namt.value=c;
}
</script>

