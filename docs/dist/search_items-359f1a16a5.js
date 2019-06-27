searchNodes=[{"ref":"CardBinEx.html","title":"CardBinEx","type":"module","doc":"Module to discover the CreditCard brand based in the first digits. Valid CreditCard brands brandalias Visavisa Eloelo JBCjbc Dinersdiners Discoverdiscover MasterCardmaster Hipercardhipercard American Expressamex"},{"ref":"CardBinEx.html#brand_from_number/1","title":"CardBinEx.brand_from_number/1","type":"function","doc":"Get the creditcard brand base in the first digits. Examples iex&gt; CardBinEx.brand_from_number(&quot;4716892&quot;) {:ok, &quot;visa&quot;} iex&gt; CardBinEx.brand_from_number(&quot;9716892&quot;) {:error, :card_brand, &quot;9716892&quot;}"},{"ref":"CardBinEx.html#brand_from_number!/1","title":"CardBinEx.brand_from_number!/1","type":"function","doc":"Get the creditcard brand base in the first digits and return only the brand. Examples iex&gt; CardBinEx.brand_from_number!(&quot;4716892&quot;) &quot;visa&quot; iex&gt; try do ...&gt; CardBinEx.brand_from_number!(&quot;9716892&quot;) ...&gt; rescue ...&gt; e in CardBinEx.Error -&gt; IO.puts(e.message) ...&gt; end invalid card number"},{"ref":"CardBinEx.Error.html","title":"CardBinEx.Error","type":"exception","doc":"Exception reaised if is an invalid creditcard bin"}]